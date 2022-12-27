// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UserEditBoldSvg from '@ant-design/icons-svg/lib/asn/UserEditBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface UserEditBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const UserEditBold: UserEditBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UserEditBoldSvg}></AntdIcon>;
};

UserEditBold.displayName = 'UserEditBold';
UserEditBold.inheritAttrs = false;
export default UserEditBold;