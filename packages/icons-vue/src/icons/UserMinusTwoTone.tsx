// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UserMinusTwoToneSvg from '@ant-design/icons-svg/lib/asn/UserMinusTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface UserMinusTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const UserMinusTwoTone: UserMinusTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UserMinusTwoToneSvg}></AntdIcon>;
};

UserMinusTwoTone.displayName = 'UserMinusTwoTone';
UserMinusTwoTone.inheritAttrs = false;
export default UserMinusTwoTone;