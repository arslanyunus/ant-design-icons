// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UserMinusBoldSvg from '@ant-design/icons-svg/lib/asn/UserMinusBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface UserMinusBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const UserMinusBold: UserMinusBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UserMinusBoldSvg}></AntdIcon>;
};

UserMinusBold.displayName = 'UserMinusBold';
UserMinusBold.inheritAttrs = false;
export default UserMinusBold;