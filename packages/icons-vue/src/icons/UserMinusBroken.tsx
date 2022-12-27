// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UserMinusBrokenSvg from '@ant-design/icons-svg/lib/asn/UserMinusBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface UserMinusBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const UserMinusBroken: UserMinusBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UserMinusBrokenSvg}></AntdIcon>;
};

UserMinusBroken.displayName = 'UserMinusBroken';
UserMinusBroken.inheritAttrs = false;
export default UserMinusBroken;