// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UserAddTwoToneSvg from '@ant-design/icons-svg/lib/asn/UserAddTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface UserAddTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const UserAddTwoTone: UserAddTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UserAddTwoToneSvg}></AntdIcon>;
};

UserAddTwoTone.displayName = 'UserAddTwoTone';
UserAddTwoTone.inheritAttrs = false;
export default UserAddTwoTone;