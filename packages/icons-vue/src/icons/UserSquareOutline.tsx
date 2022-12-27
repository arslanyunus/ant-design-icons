// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UserSquareOutlineSvg from '@ant-design/icons-svg/lib/asn/UserSquareOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface UserSquareOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const UserSquareOutline: UserSquareOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UserSquareOutlineSvg}></AntdIcon>;
};

UserSquareOutline.displayName = 'UserSquareOutline';
UserSquareOutline.inheritAttrs = false;
export default UserSquareOutline;