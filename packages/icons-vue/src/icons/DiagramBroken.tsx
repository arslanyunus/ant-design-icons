// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DiagramBrokenSvg from '@ant-design/icons-svg/lib/asn/DiagramBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DiagramBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DiagramBroken: DiagramBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DiagramBrokenSvg}></AntdIcon>;
};

DiagramBroken.displayName = 'DiagramBroken';
DiagramBroken.inheritAttrs = false;
export default DiagramBroken;