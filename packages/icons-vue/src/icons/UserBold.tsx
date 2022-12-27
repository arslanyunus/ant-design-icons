// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UserBoldSvg from '@ant-design/icons-svg/lib/asn/UserBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface UserBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const UserBold: UserBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UserBoldSvg}></AntdIcon>;
};

UserBold.displayName = 'UserBold';
UserBold.inheritAttrs = false;
export default UserBold;