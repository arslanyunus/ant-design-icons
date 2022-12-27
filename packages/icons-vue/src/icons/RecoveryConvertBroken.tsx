// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RecoveryConvertBrokenSvg from '@ant-design/icons-svg/lib/asn/RecoveryConvertBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RecoveryConvertBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RecoveryConvertBroken: RecoveryConvertBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RecoveryConvertBrokenSvg}></AntdIcon>;
};

RecoveryConvertBroken.displayName = 'RecoveryConvertBroken';
RecoveryConvertBroken.inheritAttrs = false;
export default RecoveryConvertBroken;