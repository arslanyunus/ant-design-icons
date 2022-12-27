// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Forward10SecondsBulkSvg from '@ant-design/icons-svg/lib/asn/Forward10SecondsBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Forward10SecondsBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Forward10SecondsBulk: Forward10SecondsBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Forward10SecondsBulkSvg}></AntdIcon>;
};

Forward10SecondsBulk.displayName = 'Forward10SecondsBulk';
Forward10SecondsBulk.inheritAttrs = false;
export default Forward10SecondsBulk;