// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DiagramOutlineSvg from '@ant-design/icons-svg/lib/asn/DiagramOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DiagramOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DiagramOutline: DiagramOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DiagramOutlineSvg}></AntdIcon>;
};

DiagramOutline.displayName = 'DiagramOutline';
DiagramOutline.inheritAttrs = false;
export default DiagramOutline;