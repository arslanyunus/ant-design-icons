// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Link21BoldSvg from '@ant-design/icons-svg/lib/asn/Link21Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Link21BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Link21Bold: Link21BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Link21BoldSvg}></AntdIcon>;
};

Link21Bold.displayName = 'Link21Bold';
Link21Bold.inheritAttrs = false;
export default Link21Bold;