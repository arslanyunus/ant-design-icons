// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UserEditTwoToneSvg from '@ant-design/icons-svg/lib/asn/UserEditTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface UserEditTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const UserEditTwoTone: UserEditTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UserEditTwoToneSvg}></AntdIcon>;
};

UserEditTwoTone.displayName = 'UserEditTwoTone';
UserEditTwoTone.inheritAttrs = false;
export default UserEditTwoTone;