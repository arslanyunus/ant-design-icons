// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Hierarchy3OutlineSvg from '@ant-design/icons-svg/lib/asn/Hierarchy3Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Hierarchy3OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Hierarchy3Outline: Hierarchy3OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Hierarchy3OutlineSvg}></AntdIcon>;
};

Hierarchy3Outline.displayName = 'Hierarchy3Outline';
Hierarchy3Outline.inheritAttrs = false;
export default Hierarchy3Outline;