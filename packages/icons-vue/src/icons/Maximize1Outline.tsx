// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Maximize1OutlineSvg from '@ant-design/icons-svg/lib/asn/Maximize1Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Maximize1OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Maximize1Outline: Maximize1OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Maximize1OutlineSvg}></AntdIcon>;
};

Maximize1Outline.displayName = 'Maximize1Outline';
Maximize1Outline.inheritAttrs = false;
export default Maximize1Outline;