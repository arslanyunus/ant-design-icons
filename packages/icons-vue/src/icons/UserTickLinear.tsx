// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UserTickLinearSvg from '@ant-design/icons-svg/lib/asn/UserTickLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface UserTickLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const UserTickLinear: UserTickLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UserTickLinearSvg}></AntdIcon>;
};

UserTickLinear.displayName = 'UserTickLinear';
UserTickLinear.inheritAttrs = false;
export default UserTickLinear;