// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UserRemoveBulkSvg from '@ant-design/icons-svg/lib/asn/UserRemoveBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface UserRemoveBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const UserRemoveBulk: UserRemoveBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UserRemoveBulkSvg}></AntdIcon>;
};

UserRemoveBulk.displayName = 'UserRemoveBulk';
UserRemoveBulk.inheritAttrs = false;
export default UserRemoveBulk;