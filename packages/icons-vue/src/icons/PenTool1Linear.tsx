// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PenTool1LinearSvg from '@ant-design/icons-svg/lib/asn/PenTool1Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PenTool1LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PenTool1Linear: PenTool1LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PenTool1LinearSvg}></AntdIcon>;
};

PenTool1Linear.displayName = 'PenTool1Linear';
PenTool1Linear.inheritAttrs = false;
export default PenTool1Linear;