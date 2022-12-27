// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Link21BrokenSvg from '@ant-design/icons-svg/lib/asn/Link21Broken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Link21BrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Link21Broken: Link21BrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Link21BrokenSvg}></AntdIcon>;
};

Link21Broken.displayName = 'Link21Broken';
Link21Broken.inheritAttrs = false;
export default Link21Broken;