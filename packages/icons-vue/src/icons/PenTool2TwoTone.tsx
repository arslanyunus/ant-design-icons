// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PenTool2TwoToneSvg from '@ant-design/icons-svg/lib/asn/PenTool2TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PenTool2TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PenTool2TwoTone: PenTool2TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PenTool2TwoToneSvg}></AntdIcon>;
};

PenTool2TwoTone.displayName = 'PenTool2TwoTone';
PenTool2TwoTone.inheritAttrs = false;
export default PenTool2TwoTone;