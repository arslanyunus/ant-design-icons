// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PenTool2BoldSvg from '@ant-design/icons-svg/lib/asn/PenTool2Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PenTool2BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PenTool2Bold: PenTool2BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PenTool2BoldSvg}></AntdIcon>;
};

PenTool2Bold.displayName = 'PenTool2Bold';
PenTool2Bold.inheritAttrs = false;
export default PenTool2Bold;