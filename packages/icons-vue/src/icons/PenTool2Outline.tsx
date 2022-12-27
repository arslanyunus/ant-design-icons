// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PenTool2OutlineSvg from '@ant-design/icons-svg/lib/asn/PenTool2Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PenTool2OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PenTool2Outline: PenTool2OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PenTool2OutlineSvg}></AntdIcon>;
};

PenTool2Outline.displayName = 'PenTool2Outline';
PenTool2Outline.inheritAttrs = false;
export default PenTool2Outline;