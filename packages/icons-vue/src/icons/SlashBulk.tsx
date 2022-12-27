// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SlashBulkSvg from '@ant-design/icons-svg/lib/asn/SlashBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SlashBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SlashBulk: SlashBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SlashBulkSvg}></AntdIcon>;
};

SlashBulk.displayName = 'SlashBulk';
SlashBulk.inheritAttrs = false;
export default SlashBulk;