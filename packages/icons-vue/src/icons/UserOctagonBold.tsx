// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UserOctagonBoldSvg from '@ant-design/icons-svg/lib/asn/UserOctagonBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface UserOctagonBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const UserOctagonBold: UserOctagonBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UserOctagonBoldSvg}></AntdIcon>;
};

UserOctagonBold.displayName = 'UserOctagonBold';
UserOctagonBold.inheritAttrs = false;
export default UserOctagonBold;