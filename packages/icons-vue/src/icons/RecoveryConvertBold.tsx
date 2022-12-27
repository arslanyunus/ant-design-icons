// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RecoveryConvertBoldSvg from '@ant-design/icons-svg/lib/asn/RecoveryConvertBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RecoveryConvertBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RecoveryConvertBold: RecoveryConvertBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RecoveryConvertBoldSvg}></AntdIcon>;
};

RecoveryConvertBold.displayName = 'RecoveryConvertBold';
RecoveryConvertBold.inheritAttrs = false;
export default RecoveryConvertBold;