// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UserTickTwoToneSvg from '@ant-design/icons-svg/lib/asn/UserTickTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface UserTickTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const UserTickTwoTone: UserTickTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UserTickTwoToneSvg}></AntdIcon>;
};

UserTickTwoTone.displayName = 'UserTickTwoTone';
UserTickTwoTone.inheritAttrs = false;
export default UserTickTwoTone;