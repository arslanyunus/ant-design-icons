// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RecoveryConvertOutlineSvg from '@ant-design/icons-svg/lib/asn/RecoveryConvertOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RecoveryConvertOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RecoveryConvertOutline: RecoveryConvertOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RecoveryConvertOutlineSvg}></AntdIcon>;
};

RecoveryConvertOutline.displayName = 'RecoveryConvertOutline';
RecoveryConvertOutline.inheritAttrs = false;
export default RecoveryConvertOutline;