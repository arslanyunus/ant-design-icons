// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UserCirlceAddBoldSvg from '@ant-design/icons-svg/lib/asn/UserCirlceAddBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface UserCirlceAddBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const UserCirlceAddBold: UserCirlceAddBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UserCirlceAddBoldSvg}></AntdIcon>;
};

UserCirlceAddBold.displayName = 'UserCirlceAddBold';
UserCirlceAddBold.inheritAttrs = false;
export default UserCirlceAddBold;