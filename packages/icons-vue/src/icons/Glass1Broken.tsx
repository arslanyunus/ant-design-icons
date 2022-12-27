// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Glass1BrokenSvg from '@ant-design/icons-svg/lib/asn/Glass1Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Glass1BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Glass1Broken: Glass1BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Glass1BrokenSvg}></AntdIcon>;
};

Glass1Broken.displayName = 'Glass1Broken';
Glass1Broken.inheritAttrs = false;
export default Glass1Broken;