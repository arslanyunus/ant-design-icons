// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PenClose1LinearSvg from '@ant-design/icons-svg/lib/asn/PenClose1Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PenClose1LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PenClose1Linear: PenClose1LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PenClose1LinearSvg}></AntdIcon>;
};

PenClose1Linear.displayName = 'PenClose1Linear';
PenClose1Linear.inheritAttrs = false;
export default PenClose1Linear;