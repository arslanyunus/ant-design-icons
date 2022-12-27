// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Lock1BrokenSvg from '@ant-design/icons-svg/lib/asn/Lock1Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Lock1BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Lock1Broken: Lock1BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Lock1BrokenSvg}></AntdIcon>;
};

Lock1Broken.displayName = 'Lock1Broken';
Lock1Broken.inheritAttrs = false;
export default Lock1Broken;