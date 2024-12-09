import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useGetCompanyById } from "@/api/queries/companies/get-all-company-byid";
import AnimatedSpinner from "@/components/shared/spinner/spinner";
import { natural30, primaryOne, secondaryThree } from "@/constants/colors";
import Icons from "@/components/shared/icons/icons";
import Constants from "expo-constants";
import ThemedText from "@/components/shared/themed-text/themed-text";
import Mulish from "@/constants/font";
import CardIcons from "@/components/shared/icons/card.icons";
import CompanyDetails from "@/components/company-modal/company-details";
import SendComplain from "@/components/company-modal/send-complain";
import CompanyModalOptions from "@/components/shared/action-bars/company-options";
import CompanyContent from "@/components/company-modal/content";
import CompanyComments from "@/components/company-modal/company-comments";

// Header Component
const Header = ({ name, router }) => (
  <View style={styles.header}>
    <TouchableOpacity
      onPress={() => {
        // Go back
        router.back();
      }}
      style={styles.headerLeft}
    >
      <Icons.ChevronLeft width={24} height={24} style={styles.icon} />
      <ThemedText style={styles.title}>{name}</ThemedText>
    </TouchableOpacity>
    <Icons.TabsBasket width={24} height={24} style={styles.icon} />
  </View>
);

// Image Section Component
const ImageSection = ({ imageUrl, setModal }) => {
  return (
    <ImageBackground source={{ uri: imageUrl }} style={styles.imageBackground}>
      <View style={styles.overlay} />
      <View style={styles.imageActions}>
        <TouchableOpacity style={styles.iconButton} onPress={() => {}}>
          <Icons.TabsFavorites width={20} height={20} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.iconButton}
          onPress={() =>
            setModal((prev) => ({ ...prev, status: !prev.status }))
          }
        >
          <Icons.TripleDots width={20} height={20} style={styles.icon} />
        </TouchableOpacity>
      </View>
      <View style={styles.badges}>
        <Badge text="Güvenilir Restoran" icon={Icons.TrustBadge} />
        <Badge text="Çevre Dostu Restoran" icon={Icons.WorldIcon} />
      </View>
    </ImageBackground>
  );
};

// Badge Component
const Badge = ({ text, icon: IconComponent }) => (
  <View style={styles.badge}>
    <IconComponent style={styles.badgeIcon} />
    <ThemedText style={styles.badgeText}>{text}</ThemedText>
  </View>
);

// Details Section Component
const DetailsSection = ({
  location,
  starRating,
  ratingCount,
  companyTypeName,
  setModal,
  distance,
}) => (
  <View style={styles.detailsContainer}>
    <View style={styles.row}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
        }}
      >
        <DetailItem icon={CardIcons.ClockIcon} text={`${"Unknown"}`} />
        <DetailItem
          icon={Icons.LocationOn}
          text={`${distance || "Unknown"} km`}
        />
      </View>

      <TouchableOpacity
        style={styles.rowItem}
        onPress={() =>
          setModal({
            status: false,
            activeTab: "comments",
          })
        }
      >
        <CardIcons.StarIcon width={18} height={18} style={styles.icon} />
        <ThemedText style={styles.descriptionText}>
          {starRating || 0} / 5
        </ThemedText>
        <Text style={styles.subText}>({ratingCount || 0} oy)</Text>
      </TouchableOpacity>
    </View>
    <DetailItem
      icon={Icons.SpoonAndFork}
      text={companyTypeName || "Unknown Type"}
    />
  </View>
);

// Detail Item Component
const DetailItem = ({ icon: IconComponent, text }) => (
  <View style={styles.rowItem}>
    <IconComponent width={16} height={16} style={styles.icon} />
    <ThemedText style={styles.descriptionText}>{text}</ThemedText>
  </View>
);

type TCompanyContentTabs = "meals" | "about" | "complain";

// Main Component
const CompanyModal = () => {
  const params = useLocalSearchParams<any>();

  console.log("params", params);
  const router = useRouter();
  const [modal, setModal] = React.useState<{
    status: boolean;
    activeTab: TCompanyContentTabs;
  }>({ status: false, activeTab: "meals" });

  const { data, isLoading, isError } = useGetCompanyById(params.companyId);

  if (isLoading) {
    return (
      <View style={[styles.container, styles.center]}>
        <AnimatedSpinner variant="primary" color={secondaryThree} />
      </View>
    );
  }

  if (isError) {
    return (
      <View style={[styles.container, styles.center]}>
        <ThemedText style={styles.errorText}>
          Error loading data. Please try again later.
        </ThemedText>
      </View>
    );
  }

  if (data) {
    return (
      <View style={styles.container}>
        <Header router={router} name={data.name} />
        <ImageSection imageUrl={data.imageUrl} setModal={setModal} />
        <DetailsSection
          location={data.addressDetail}
          starRating={data.starRating}
          ratingCount={data.ratingCount}
          companyTypeName={data.companyTypeName}
          distance={Number(params.companyDistance)}
          setModal={setModal}
        />
        <View
          style={{
            flex: 1,
          }}
        >
          {modal.activeTab === "meals" ? (
            <CompanyContent companyId={params.companyId} />
          ) : modal.activeTab === "about" ? (
            <CompanyDetails
              mobilePhone={data.mobilePhone}
              companyPhone={data.companyPhone}
              address={`${data.city} / ${data.district} / ${data.street} / ${data.addressDetail}`}
              workHours={null}
            />
          ) : modal.activeTab === "complain" ? (
            <SendComplain />
          ) : modal.activeTab === "comments" ? (
            <CompanyComments />
          ) : null}
        </View>

        <CompanyModalOptions modal={modal} setModal={setModal} />
      </View>
    );
  }

  return null;
};

export default CompanyModal;

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "white",
    position: "relative",
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 60,
    paddingHorizontal: 20,
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  icon: {
    color: primaryOne,
  },
  title: {
    fontSize: 18,
    fontFamily: Mulish.Bold,
    color: "black",
  },
  imageBackground: {
    width: "100%",
    height: 200,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  imageActions: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 10,
    padding: 10,
  },
  iconButton: {
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 8,
    borderRadius: 50,
  },
  badges: {
    flexDirection: "row",
    position: "absolute",
    bottom: 10,
    left: 10,
    gap: 10,
  },
  badge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: primaryOne,
    borderRadius: 4,
    paddingHorizontal: 8,
    paddingVertical: 4,
    gap: 4,
  },
  badgeIcon: {
    color: "white",
    width: 16,
    height: 16,
  },
  badgeText: {
    fontSize: 10,
    color: "white",
  },
  detailsContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 10,
    backgroundColor: "white",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  rowItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  descriptionText: {
    fontSize: 14,
    fontFamily: Mulish.Regular,
    color: "black",
  },
  subText: {
    fontSize: 12,
    color: natural30,
  },

  errorText: {
    fontSize: 16,
    fontFamily: Mulish.Bold,
    color: "red",
  },
});
