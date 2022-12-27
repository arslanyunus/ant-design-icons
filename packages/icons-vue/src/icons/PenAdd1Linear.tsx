// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import PenAdd1LinearSvg from '@ant-design/icons-svg/lib/asn/PenAdd1Linear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface PenAdd1LinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const PenAdd1Linear: PenAdd1LinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={PenAdd1LinearSvg}></AntdIcon>;
};

PenAdd1Linear.displayName = 'PenAdd1Linear';
PenAdd1Linear.inheritAttrs = false;
export default PenAdd1Linear;