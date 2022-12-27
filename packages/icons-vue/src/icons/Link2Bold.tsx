// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Link2BoldSvg from '@ant-design/icons-svg/lib/asn/Link2Bold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Link2BoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Link2Bold: Link2BoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Link2BoldSvg}></AntdIcon>;
};

Link2Bold.displayName = 'Link2Bold';
Link2Bold.inheritAttrs = false;
export default Link2Bold;