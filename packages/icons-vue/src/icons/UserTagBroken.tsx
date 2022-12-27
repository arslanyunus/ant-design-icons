// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UserTagBrokenSvg from '@ant-design/icons-svg/lib/asn/UserTagBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface UserTagBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const UserTagBroken: UserTagBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UserTagBrokenSvg}></AntdIcon>;
};

UserTagBroken.displayName = 'UserTagBroken';
UserTagBroken.inheritAttrs = false;
export default UserTagBroken;