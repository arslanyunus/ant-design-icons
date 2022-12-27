// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PenTool2BrokenSvg from '@ant-design/icons-svg/lib/asn/PenTool2Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PenTool2BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PenTool2Broken: PenTool2BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PenTool2BrokenSvg}></AntdIcon>;
};

PenTool2Broken.displayName = 'PenTool2Broken';
PenTool2Broken.inheritAttrs = false;
export default PenTool2Broken;