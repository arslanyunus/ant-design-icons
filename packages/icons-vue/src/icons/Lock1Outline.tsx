// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Lock1OutlineSvg from '@ant-design/icons-svg/lib/asn/Lock1Outline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Lock1OutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Lock1Outline: Lock1OutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Lock1OutlineSvg}></AntdIcon>;
};

Lock1Outline.displayName = 'Lock1Outline';
Lock1Outline.inheritAttrs = false;
export default Lock1Outline;