// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UserTickBoldSvg from '@ant-design/icons-svg/lib/asn/UserTickBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface UserTickBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const UserTickBold: UserTickBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UserTickBoldSvg}></AntdIcon>;
};

UserTickBold.displayName = 'UserTickBold';
UserTickBold.inheritAttrs = false;
export default UserTickBold;