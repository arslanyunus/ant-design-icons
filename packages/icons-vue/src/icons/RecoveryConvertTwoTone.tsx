// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import RecoveryConvertTwoToneSvg from '@ant-design/icons-svg/lib/asn/RecoveryConvertTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface RecoveryConvertTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const RecoveryConvertTwoTone: RecoveryConvertTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={RecoveryConvertTwoToneSvg}></AntdIcon>;
};

RecoveryConvertTwoTone.displayName = 'RecoveryConvertTwoTone';
RecoveryConvertTwoTone.inheritAttrs = false;
export default RecoveryConvertTwoTone;