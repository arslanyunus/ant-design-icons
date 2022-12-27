// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UserMinusBulkSvg from '@ant-design/icons-svg/lib/asn/UserMinusBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface UserMinusBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const UserMinusBulk: UserMinusBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UserMinusBulkSvg}></AntdIcon>;
};

UserMinusBulk.displayName = 'UserMinusBulk';
UserMinusBulk.inheritAttrs = false;
export default UserMinusBulk;