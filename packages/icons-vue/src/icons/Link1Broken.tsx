// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Link1BrokenSvg from '@ant-design/icons-svg/lib/asn/Link1Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Link1BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Link1Broken: Link1BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Link1BrokenSvg}></AntdIcon>;
};

Link1Broken.displayName = 'Link1Broken';
Link1Broken.inheritAttrs = false;
export default Link1Broken;