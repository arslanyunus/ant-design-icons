// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DiagramTwoToneSvg from '@ant-design/icons-svg/lib/asn/DiagramTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DiagramTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DiagramTwoTone: DiagramTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DiagramTwoToneSvg}></AntdIcon>;
};

DiagramTwoTone.displayName = 'DiagramTwoTone';
DiagramTwoTone.inheritAttrs = false;
export default DiagramTwoTone;