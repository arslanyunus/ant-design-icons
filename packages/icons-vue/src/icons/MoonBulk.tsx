// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MoonBulkSvg from '@ant-design/icons-svg/lib/asn/MoonBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MoonBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MoonBulk: MoonBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MoonBulkSvg}></AntdIcon>;
};

MoonBulk.displayName = 'MoonBulk';
MoonBulk.inheritAttrs = false;
export default MoonBulk;