// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PenTool21LinearSvg from '@ant-design/icons-svg/lib/asn/PenTool21Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PenTool21LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PenTool21Linear: PenTool21LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PenTool21LinearSvg}></AntdIcon>;
};

PenTool21Linear.displayName = 'PenTool21Linear';
PenTool21Linear.inheritAttrs = false;
export default PenTool21Linear;