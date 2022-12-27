// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PasswordCheckBulkSvg from '@ant-design/icons-svg/lib/asn/PasswordCheckBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PasswordCheckBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PasswordCheckBulk: PasswordCheckBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PasswordCheckBulkSvg}></AntdIcon>;
};

PasswordCheckBulk.displayName = 'PasswordCheckBulk';
PasswordCheckBulk.inheritAttrs = false;
export default PasswordCheckBulk;