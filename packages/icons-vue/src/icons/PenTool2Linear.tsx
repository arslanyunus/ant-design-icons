// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PenTool2LinearSvg from '@ant-design/icons-svg/lib/asn/PenTool2Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PenTool2LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PenTool2Linear: PenTool2LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PenTool2LinearSvg}></AntdIcon>;
};

PenTool2Linear.displayName = 'PenTool2Linear';
PenTool2Linear.inheritAttrs = false;
export default PenTool2Linear;