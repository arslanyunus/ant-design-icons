// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RecoveryConvertBulkSvg from '@ant-design/icons-svg/lib/asn/RecoveryConvertBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RecoveryConvertBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RecoveryConvertBulk: RecoveryConvertBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RecoveryConvertBulkSvg}></AntdIcon>;
};

RecoveryConvertBulk.displayName = 'RecoveryConvertBulk';
RecoveryConvertBulk.inheritAttrs = false;
export default RecoveryConvertBulk;