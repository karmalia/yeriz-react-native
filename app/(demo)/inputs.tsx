import React from "react";
import ScreenWrapper from "@/components/shared/demo-wrap";

import ThemedInput from "@/components/shared/themed-input/themed-input";

const DemoInputsPage = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <ScreenWrapper>
      <ThemedInput
        value={username}
        onChangeText={setUsername}
        placeholder={"username"}
        leftIcon={"UserIcon"}
        label={"Username"}
        inputMode={"text"}
      />
      <ThemedInput
        value={password}
        leftIcon={"LockIcon"}
        rightIcon={"EyeOffIcon"}
        onChangeText={setPassword}
        placeholder={"Password"}
        label={"Password"}
      />
    </ScreenWrapper>
  );
};

export default DemoInputsPage;
