// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UserAddBoldSvg from '@ant-design/icons-svg/lib/asn/UserAddBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface UserAddBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const UserAddBold: UserAddBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UserAddBoldSvg}></AntdIcon>;
};

UserAddBold.displayName = 'UserAddBold';
UserAddBold.inheritAttrs = false;
export default UserAddBold;