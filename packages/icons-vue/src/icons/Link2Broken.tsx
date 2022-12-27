// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Link2BrokenSvg from '@ant-design/icons-svg/lib/asn/Link2Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Link2BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Link2Broken: Link2BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Link2BrokenSvg}></AntdIcon>;
};

Link2Broken.displayName = 'Link2Broken';
Link2Broken.inheritAttrs = false;
export default Link2Broken;