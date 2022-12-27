// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ColorsSquareBulkSvg from '@ant-design/icons-svg/lib/asn/ColorsSquareBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ColorsSquareBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ColorsSquareBulk: ColorsSquareBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ColorsSquareBulkSvg}></AntdIcon>;
};

ColorsSquareBulk.displayName = 'ColorsSquareBulk';
ColorsSquareBulk.inheritAttrs = false;
export default ColorsSquareBulk;