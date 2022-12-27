// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DiagramBoldSvg from '@ant-design/icons-svg/lib/asn/DiagramBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DiagramBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DiagramBold: DiagramBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DiagramBoldSvg}></AntdIcon>;
};

DiagramBold.displayName = 'DiagramBold';
DiagramBold.inheritAttrs = false;
export default DiagramBold;