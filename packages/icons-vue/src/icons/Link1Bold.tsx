// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Link1BoldSvg from '@ant-design/icons-svg/lib/asn/Link1Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Link1BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Link1Bold: Link1BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Link1BoldSvg}></AntdIcon>;
};

Link1Bold.displayName = 'Link1Bold';
Link1Bold.inheritAttrs = false;
export default Link1Bold;