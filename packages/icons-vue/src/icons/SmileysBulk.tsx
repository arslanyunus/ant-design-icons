// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SmileysBulkSvg from '@ant-design/icons-svg/lib/asn/SmileysBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SmileysBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SmileysBulk: SmileysBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SmileysBulkSvg}></AntdIcon>;
};

SmileysBulk.displayName = 'SmileysBulk';
SmileysBulk.inheritAttrs = false;
export default SmileysBulk;